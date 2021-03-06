const DISTRICTS = {
    'Abington': { districts : ['Abington'] },
    'Action': { districts : ['Acton-Boxborough'] },
    'Acushnet': { districts : ['Acushnet'] },
    'Adams': { districts : ['Adams-Cheshire'] },
    'Agawam': { districts : ['Agawam'] },
    'Amesbury': { districts : ['Amesbury'] },
    'Amherst': { districts : ['Amherst','Amherst-Pelham'] },
    '': { districts : ['Amherst-Pelham'] },
    'Andover': { districts : ['Andover'] },
    'Arlington': { districts : ['Arlington'] },
    '': { districts : ['Ashburnham-Westminster'] },
    'Ashland': { districts : ['Ashland'] },
    '': { districts : ['Athol-Royalston'] },
    'Attleboro': { districts : ['Attleboro'] },
    'Auburn': { districts : ['Auburn'] },
    'Avon': { districts : ['Avon'] },
    '': { districts : ['Ayer Shirley School District'] },
    'Barnstable': { districts : ['Barnstable'] },
    'Bedford': { districts : ['Bedford'] },
    'Belchertown': { districts : ['Belchertown'] },
    'Bellingham': { districts : ['Bellingham'] },
    'Belmont': { districts : ['Belmont'] },
    'Berkley': { districts : ['Berkley'] },
    '': { districts : ['Berkshire Hills'] },
    'Berlin': { districts : ['Berlin', 'Berlin-Boylston'] },
    'Beverly': { districts : ['Beverly'] },
    'Billerica': { districts : ['Billerica'] },
    '': { districts : ['Blackstone-Millville'] },
    'Boston': { districts : ['Boston'] },
    'Bourne': { districts : ['Bourne'] },
    'Boxborough': { districts : ['Acton-Boxborough'] },
    'Boxford': { districts : ['Boxford'] },
    'Boylston': { districts : ['Boylston','Berlin-Boylston'] },
    'Braintree': { districts : ['Braintree'] },
    'Brewster': { districts : ['Brewster'] },
    '': { districts : ['Bridgewater-Raynham'] },
    'Brimfield': { districts : ['Brimfield'] },
    'Brockton': { districts : ['Brockton'] },
    'Brookfield': { districts : ['Brookfield'] },
    'Brookline': { districts : ['Brookline'] },
    'Burlington': { districts : ['Burlington'] },
    'Cambridge': { districts : ['Cambridge'] },
    'Canton': { districts : ['Canton'] },
    'Carlisle': { districts : ['Carlisle', 'Concord-Carlisle'] },
    'Carver': { districts : ['Carver'] },
    '': { districts : ['Central Berkshire'] },
    'Chelmsford': { districts : ['Chelmsford'] },
    'Chelsea': { districts : ['Chelsea'] },
    'Cheshire': { districts : ['Adams-Cheshire'] },
    '': { districts : ['Chesterfield-Goshen'] },
    'Chicopee': { districts : ['Chicopee'] },
    'Clarksburg': { districts : ['Clarksburg'] },
    'Clinton': { districts : ['Clinton'] },
    'Cohasset': { districts : ['Cohasset'] },
    'Concord': { districts : ['Concord', 'Concord-Carlisle'] },
    'Conway': { districts : ['Conway'] },
    'Danvers': { districts : ['Danvers'] },
    'Dartmouth': { districts : ['Dartmouth'] },
    'Dedham': { districts : ['Dedham'] },
    'Deerfield': { districts : ['Deerfield'] },
    '': { districts : ['Dennis-Yarmouth'] },
    '': { districts : ['Dighton-Rehoboth'] },
    'Douglas': { districts : ['Douglas'] },
    'Dover': { districts : ['Dover', 'Dover-Sherborn'] },
    '': { districts : ['Dover-Sherborn'] },
    'Dracut': { districts : ['Dracut'] },
    '': { districts : ['Dudley-Charlton Reg'] },
    'Duxbury': { districts : ['Duxbury'] },
    'East Bridgewater': { districts : ['East Bridgewater'] },
    'East Longmeadow': { districts : ['East Longmeadow'] },
    'Eastham': { districts : ['Eastham'] },
    'Easthampton': { districts : ['Easthampton'] },
    'Easton': { districts : ['Easton'] },
    'Edgartown': { districts : ['Edgartown'] },
    'Erving': { districts : ['Erving'] },
    'Everett': { districts : ['Everett'] },
    'Fairhaven': { districts : ['Fairhaven'] },
    'Fall River': { districts : ['Fall River'] },
    'Falmouth': { districts : ['Falmouth'] },
    '': { districts : ['Farmington River Reg'] },
    'Fitchburg': { districts : ['Fitchburg'] },
    'Florida': { districts : ['Florida'] },
    'Foxborough': { districts : ['Foxborough'] },
    'Framingham': { districts : ['Framingham'] },
    'Franklin': { districts : ['Franklin'] },
    '': { districts : ['Freetown-Lakeville'] },
    '': { districts : ['Frontier'] },
    'Gardner': { districts : ['Gardner'] },
    '': { districts : ['Gateway'] },
    'Georgetown': { districts : ['Georgetown'] },
    '': { districts : ['Gill-Montague'] },
    'Gloucester': { districts : ['Gloucester'] },
    '': { districts : ['Gosnold'] },
    'Grafton': { districts : ['Grafton'] },
    'Granby': { districts : ['Granby'] },
    'Greenfield': { districts : ['Greenfield'] },
    '': { districts : ['Groton-Dunstable'] },
    'Hadley': { districts : ['Hadley'] },
    'Halifax': { districts : ['Halifax'] },
    '': { districts : ['Hamilton-Wenham'] },
    '': { districts : ['Hampden-Wilbraham'] },
    'Hampshire': { districts : ['Hampshire'] },
    'Hancock': { districts : ['Hancock'] },
    'Hanover': { districts : ['Hanover'] },
    'Harvard': { districts : ['Harvard'] },
    'Hatfield': { districts : ['Hatfield'] },
    'Haverhill': { districts : ['Haverhill'] },
    'Hawlemont': { districts : ['Hawlemont'] },
    'Hingham': { districts : ['Hingham'] },
    'Holbrook': { districts : ['Holbrook'] },
    'Holland': { districts : ['Holland'] },
    'Holliston': { districts : ['Holliston'] },
    'Holyoke': { districts : ['Holyoke'] },
    'Hopedale': { districts : ['Hopedale'] },
    'Hopkinton': { districts : ['Hopkinton'] },
    'Hudson': { districts : ['Hudson'] },
    'Hull': { districts : ['Hull'] },
    'Ipswich': { districts : ['Ipswich'] },
    '': { districts : ['King Philip'] },
    'Kingston': { districts : ['Kingston'] },
    'Lanesborough': { districts : ['Lanesborough'] },
    'Lawrence': { districts : ['Lawrence'] },
    'Lee': { districts : ['Lee'] },
    'Leicester': { districts : ['Leicester'] },
    'Lenox': { districts : ['Lenox'] },
    'Leominster': { districts : ['Leominster'] },
    'Leverett': { districts : ['Leverett'] },
    'Lexington': { districts : ['Lexington'] },
    'Lincoln': { districts : ['Lincoln','Lincoln-Sudbury'] },
    '': { districts : ['Lincoln-Sudbury'] },
    'Littleton': { districts : ['Littleton'] },
    'Longmeadow': { districts : ['Longmeadow'] },
    'Lowell': { districts : ['Lowell'] },
    'Ludlow': { districts : ['Ludlow'] },
    'Lunenburg': { districts : ['Lunenburg'] },
    'Lynn': { districts : ['Lynn'] },
    'Lynnfield': { districts : ['Lynnfield'] },
    'Malden': { districts : ['Malden'] },
    '': { districts : ['Manchester Essex Regional'] },
    'Mansfield': { districts : ['Mansfield'] },
    'Marblehead': { districts : ['Marblehead'] },
    'Marion': { districts : ['Marion'] },
    'Marlborough': { districts : ['Marlborough'] },
    'Marshfield': { districts : ['Marshfield'] },
    'Martha\'s Vineyard': { districts : ['Martha\'s Vineyard'] },
    '': { districts : ['Masconomet'] },
    'Mashpee': { districts : ['Mashpee'] },
    '': { districts : ['Mattapoisett'] },
    'Maynard': { districts : ['Maynard'] },
    'Medfield': { districts : ['Medfield'] },
    'Medford': { districts : ['Medford'] },
    'Medway': { districts : ['Medway'] },
    'Melrose': { districts : ['Melrose'] },
    '': { districts : ['Mendon-Upton'] },
    'Methuen': { districts : ['Methuen'] },
    'Middleborough': { districts : ['Middleborough'] },
    'Middleton': { districts : ['Middleton'] },
    'Milford': { districts : ['Milford'] },
    'Millbury': { districts : ['Millbury'] },
    'Millis': { districts : ['Millis'] },
    'Milton': { districts : ['Milton'] },
    '': { districts : ['Mohawk Trail'] },
    '': { districts : ['Monomoy Regional School District'] },
    'Monson': { districts : ['Monson'] },
    '': { districts : ['Mount Greylock'] },
    'Nahant': { districts : ['Nahant'] },
    'Nantucket': { districts : ['Nantucket'] },
    '': { districts : ['Narragansett'] },
    '': { districts : ['Nashoba'] },
    'Natick': { districts : ['Natick'] },
    'Nauset': { districts : ['Nauset'] },
    'Needham': { districts : ['Needham'] },
    'New Bedford': { districts : ['New Bedford'] },
    '': { districts : ['New Salem-Wendell'] },
    'Newburyport': { districts : ['Newburyport'] },
    'Newton': { districts : ['Newton'] },
    'Norfolk': { districts : ['Norfolk','King Phillip'] },
    'North Adams': { districts : ['North Adams'] },
    'North Andover': { districts : ['North Andover'] },
    'North Attleborough': { districts : ['North Attleborough'] },
    'North Brookfield': { districts : ['North Brookfield'] },
    '': { districts : ['North Middlesex'] },
    '': { districts : ['North Reading'] },
    '': { districts : ['Northampton'] },
    '': { districts : ['Northampton-Smith Vocational Agricultural'] },
    '': { districts : ['Northboro-Southboro'] },
    '': { districts : ['Northborough'] },
    '': { districts : ['Northbridge'] },
    '': { districts : ['Northeast Metropolitan Regional Vocational Technical'] },
    '': { districts : ['Northern Berkshire Regional Vocational Technical'] },
    '': { districts : ['Norton'] },
    '': { districts : ['Norwell'] },
    '': { districts : ['Norwood'] },
    '': { districts : ['Oak Bluffs'] },
    '': { districts : ['Old Colony Regional Vocational Technical'] },
    '': { districts : ['Old Rochester'] },
    '': { districts : ['Orange'] },
    '': { districts : ['Orleans'] },
    '': { districts : ['Oxford'] },
    '': { districts : ['Palmer'] },
    '': { districts : ['Pathfinder Regional Vocational Technical'] },
    '': { districts : ['Paulo Freire Social Justice Charter School (District)'] },
    '': { districts : ['Peabody'] },
    '': { districts : ['Pelham'] },
    '': { districts : ['Pembroke'] },
    '': { districts : ['Pentucket'] },
    '': { districts : ['Petersham'] },
    '': { districts : ['Phoenix Academy Public Charter High School Springfield (District)'] },
    '': { districts : ['Phoenix Charter Academy (District)'] },
    '': { districts : ['Pioneer Charter School of Science (District)'] },
    '': { districts : ['Pioneer Charter School of Science II (PCSS-II) (District)'] },
    '': { districts : ['Pioneer Valley'] },
    '': { districts : ['Pioneer Valley Chinese Immersion Charter (District)'] },
    '': { districts : ['Pioneer Valley Performing Arts Charter Public (District)'] },
    '': { districts : ['Pittsfield'] },
    '': { districts : ['Plainville'] },
    '': { districts : ['Plymouth'] },
    '': { districts : ['Plympton'] },
    '': { districts : ['Prospect Hill Academy Charter (District)'] },
    '': { districts : ['Provincetown'] },
    '': { districts : ['Quabbin'] },
    '': { districts : ['Quaboag Regional'] },
    '': { districts : ['Quincy'] },
    '': { districts : ['Ralph C Mahar'] },
    '': { districts : ['Randolph'] },
    '': { districts : ['Reading'] },
    '': { districts : ['Revere'] },
    '': { districts : ['Richmond'] },
    '': { districts : ['Rising Tide Charter Public (District)'] },
    '': { districts : ['River Valley Charter (District)'] },
    '': { districts : ['Rochester'] },
    '': { districts : ['Rockland'] },
    '': { districts : ['Rockport'] },
    '': { districts : ['Rowe'] },
    '': { districts : ['Roxbury Preparatory Charter (District)'] },
    '': { districts : ['Sabis International Charter (District)'] },
    '': { districts : ['Salem'] },
    '': { districts : ['Salem Academy Charter (District)'] },
    '': { districts : ['Sandwich'] },
    '': { districts : ['Saugus'] },
    '': { districts : ['Savoy'] },
    '': { districts : ['Scituate'] },
    '': { districts : ['Seekonk'] },
    '': { districts : ['Seven Hills Charter Public (District)'] },
    '': { districts : ['Sharon'] },
    '': { districts : ['Shawsheen Valley Regional Vocational Technical'] },
    '': { districts : ['Sherborn'] },
    '': { districts : ['Shrewsbury'] },
    '': { districts : ['Shutesbury'] },
    '': { districts : ['Silver Hill Horace Mann Charter (District)'] },
    '': { districts : ['Silver Lake'] },
    '': { districts : ['Sizer School: A North Central Charter Essential (District)'] },
    '': { districts : ['Somerset'] },
    '': { districts : ['Somerset Berkley Regional School District'] },
    '': { districts : ['Somerville'] },
    '': { districts : ['South Hadley'] },
    '': { districts : ['South Middlesex Regional Vocational Technical'] },
    '': { districts : ['South Shore Charter Public (District)'] },
    '': { districts : ['South Shore Regional Vocational Technical'] },
    '': { districts : ['Southampton'] },
    '': { districts : ['Southborough'] },
    '': { districts : ['Southbridge'] },
    '': { districts : ['Southeastern Regional Vocational Technical'] },
    '': { districts : ['Southern Berkshire'] },
    '': { districts : ['Southern Worcester County Regional Vocational Technical'] },
    '': { districts : ['Southwick-Tolland-Granville Regional School District'] },
    '': { districts : ['Spencer-E Brookfield'] },
    '': { districts : ['Springfield'] },
    '': { districts : ['Springfield Preparatory Charter School (District)'] },
    '': { districts : ['Stoneham'] },
    '': { districts : ['Stoughton'] },
    '': { districts : ['Sturbridge'] },
    '': { districts : ['Sturgis Charter Public (District)'] },
    '': { districts : ['Sudbury'] },
    '': { districts : ['Sunderland'] },
    '': { districts : ['Sutton'] },
    '': { districts : ['Swampscott'] },
    '': { districts : ['Swansea'] },
    '': { districts : ['Tantasqua'] },
    '': { districts : ['Taunton'] },
    '': { districts : ['TEC Connections Academy Commonwealth Virtual School District'] },
    '': { districts : ['Tewksbury'] },
    '': { districts : ['Tisbury'] },
    '': { districts : ['Topsfield'] },
    '': { districts : ['Tri-County Regional Vocational Technical'] },
    '': { districts : ['Triton'] },
    '': { districts : ['Truro'] },
    '': { districts : ['Tyngsborough'] },
    '': { districts : ['UP Academy Charter School of Boston (District)'] },
    '': { districts : ['UP Academy Charter School of Dorchester (District)'] },
    '': { districts : ['Up-Island Regional'] },
    '': { districts : ['Upper Cape Cod Regional Vocational Technical'] },
    '': { districts : ['Uxbridge'] },
    '': { districts : ['Veritas Preparatory Charter School (District)'] },
    '': { districts : ['Wachusett'] },
    '': { districts : ['Wakefield'] },
    '': { districts : ['Wales'] },
    '': { districts : ['Walpole'] },
    '': { districts : ['Waltham'] },
    '': { districts : ['Ware'] },
    '': { districts : ['Wareham'] },
    '': { districts : ['Watertown'] },
    '': { districts : ['Wayland'] },
    '': { districts : ['Webster'] },
    '': { districts : ['Wellesley'] },
    '': { districts : ['Wellfleet'] },
    '': { districts : ['West Boylston'] },
    '': { districts : ['West Bridgewater'] },
    '': { districts : ['West Springfield'] },
    '': { districts : ['Westborough'] },
    '': { districts : ['Westfield'] },
    '': { districts : ['Westford'] },
    '': { districts : ['Westhampton'] },
    '': { districts : ['Weston'] },
    '': { districts : ['Westport'] },
    '': { districts : ['Westwood'] },
    '': { districts : ['Weymouth'] },
    '': { districts : ['Whately'] },
    '': { districts : ['Whitman-Hanson'] },
    '': { districts : ['Whittier Regional Vocational Technical'] },
    '': { districts : ['Williamsburg'] },
    '': { districts : ['Williamstown'] },
    '': { districts : ['Wilmington'] },
    '': { districts : ['Winchendon'] },
    '': { districts : ['Winchester'] },
    '': { districts : ['Winthrop'] },
    '': { districts : ['Woburn'] },
    '': { districts : ['Worcester'] },
    '': { districts : ['Worthington'] },
    '': { districts : ['Wrentham'] }
 };