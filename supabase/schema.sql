-- VANGUARD & HASTINGS LLP BOUTIQUE LAW OS
-- SCHEMA V1.0.0 WITH ROW LEVEL SECURITY (RLS)

CREATE TABLE IF NOT EXISTS legal_clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_name TEXT NOT NULL,
  primary_contact TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  conflict_check_passed BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS practice_disciplines (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  base_retainer NUMERIC(10,2) NOT NULL,
  lead_partner TEXT NOT NULL,
  active BOOLEAN DEFAULT true
);

CREATE TABLE IF NOT EXISTS active_matters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES legal_clients(id) ON DELETE CASCADE,
  discipline_id UUID REFERENCES practice_disciplines(id),
  matter_code TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  status TEXT DEFAULT 'intake_review', -- intake_review, active_matter, closing, closed
  retainer_deposited NUMERIC(10,2) NOT NULL DEFAULT 0,
  retainer_balance NUMERIC(10,2) NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS iolta_ledger (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  matter_id UUID REFERENCES active_matters(id) ON DELETE CASCADE,
  transaction_type TEXT NOT NULL, -- deposit, billable_draw, refund
  amount NUMERIC(10,2) NOT NULL,
  description TEXT NOT NULL,
  posted_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ENABLE RLS
ALTER TABLE legal_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE practice_disciplines ENABLE ROW LEVEL SECURITY;
ALTER TABLE active_matters ENABLE ROW LEVEL SECURITY;
ALTER TABLE iolta_ledger ENABLE ROW LEVEL SECURITY;

-- POLICIES
CREATE POLICY "Public practice disciplines read" ON practice_disciplines FOR SELECT USING (true);
CREATE POLICY "Staff all access disciplines" ON practice_disciplines FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Staff all access clients" ON legal_clients FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Staff all access matters" ON active_matters FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Staff all access iolta" ON iolta_ledger FOR ALL USING (auth.role() = 'authenticated');
