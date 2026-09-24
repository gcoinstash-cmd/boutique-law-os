-- SEED DATA FOR VANGUARD & HASTINGS BOUTIQUE LAW OS

INSERT INTO practice_disciplines (slug, name, category, base_retainer, lead_partner) VALUES
('mergers-acquisitions', 'Mergers, Acquisitions & Carve-Outs', 'M&A COUNSEL', 35000.00, 'Eleanor Hastings, Senior Partner'),
('venture-capital-syndication', 'Venture Capital & Fund Syndication', 'PRIVATE EQUITY', 25000.00, 'Richard Vanguard, Managing Partner'),
('commercial-litigation', 'High-Stakes Commercial Litigation', 'TRIAL ADVOCACY', 50000.00, 'Stephen Vance, Trial Chair'),
('fractional-gc', 'Fractional General Counsel-as-a-Service', 'OUTSOURCED GC', 12500.00, 'Victoria Chen, Corporate Counsel');

INSERT INTO legal_clients (entity_name, primary_contact, email, phone, conflict_check_passed) VALUES
('Titan Technologies Inc.', 'Elena Rostova, COO', 'elena@titantech.io', '+1 (415) 890-1122', true),
('Apex Horizon Real Estate Fund III', 'Marcus Vance, Managing Director', 'mvance@apexhorizon.com', '+1 (212) 555-8790', true),
('Sovereign BioGenics Corp.', 'Dr. Henrik Meyer, Chairman', 'meyer@sovereignbio.com', '+1 (650) 432-1980', true);

INSERT INTO active_matters (client_id, discipline_id, matter_code, title, status, retainer_deposited, retainer_balance) VALUES
((SELECT id FROM legal_clients WHERE email='elena@titantech.io'), (SELECT id FROM practice_disciplines WHERE slug='mergers-acquisitions'), 'MAT-2026-089', 'Project Titan Series B & Asset Acquisition', 'active_matter', 45000.00, 31250.00),
((SELECT id FROM legal_clients WHERE email='mvance@apexhorizon.com'), (SELECT id FROM practice_disciplines WHERE slug='venture-capital-syndication'), 'MAT-2026-104', 'Apex Real Estate Syndication Fund III Private Placement', 'active_matter', 75000.00, 62400.00);

INSERT INTO iolta_ledger (matter_id, transaction_type, amount, description) VALUES
((SELECT id FROM active_matters WHERE matter_code='MAT-2026-089'), 'deposit', 45000.00, 'Initial IOLTA Retainer Escrow Deposit'),
((SELECT id FROM active_matters WHERE matter_code='MAT-2026-089'), 'billable_draw', 13750.00, 'August Deal Drafting & Due Diligence Billable Draw');
