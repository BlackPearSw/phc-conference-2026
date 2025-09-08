export function generateICS() {
  const eventTitle = "PHC Conference 2026 - Nourish to Flourish";
  const location = "The Light, Euston, London, NW1 2BJ, United Kingdom";
  const description = "PHC Conference 2026: Good metabolic health for all the family. Join us for our 10th Anniversary Conference with dedicated sessions from world-renowned speakers on women's health, men's health, teenage health, and children's health. 16 CPD Points Available.";
  const url = "https://phcuk.org";
  
  // Day 1: Saturday May 16, 2026, 8am-5pm BST (UTC+1)
  const day1Start = "20260516T070000Z"; // 8am BST = 7am UTC
  const day1End = "20260516T160000Z";   // 5pm BST = 4pm UTC
  
  // Day 2: Sunday May 17, 2026, 8am-5pm BST (UTC+1)
  const day2Start = "20260517T070000Z"; // 8am BST = 7am UTC
  const day2End = "20260517T160000Z";   // 5pm BST = 4pm UTC
  
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//PHC//PHC Conference 2026//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:phc-conference-2026-day1@phcuk.org
DTSTART:${day1Start}
DTEND:${day1End}
SUMMARY:${eventTitle} - Day 1
DESCRIPTION:${description}
LOCATION:${location}
URL:${url}
STATUS:CONFIRMED
END:VEVENT
BEGIN:VEVENT
UID:phc-conference-2026-day2@phcuk.org
DTSTART:${day2Start}
DTEND:${day2End}
SUMMARY:${eventTitle} - Day 2
DESCRIPTION:${description}
LOCATION:${location}
URL:${url}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

  // Create a blob with the ICS content
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  
  // Create a download link
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = 'phc-conference-2026.ics';
  
  // Trigger the download
  document.body.appendChild(link);
  link.click();
  
  // Clean up
  document.body.removeChild(link);
  window.URL.revokeObjectURL(link.href);
}