const profiles = [
  ['lovleet-jain', 'lovleet'],
  ['samanvay-gupta', 'samanvay'],
  ['deepesh-bhatia', 'deepesh-bhatia'],
  ['shalini-jain', 'shalini'],
  ['aditya-upadhyay', 'aditya'],
  ['aman-soni', 'aman'],
  ['ansh-jain', 'ansh'],
  ['arun-mewada', 'arun-mewada'],
  ['astha', 'astha'],
  ['chetan-dubey', 'chetandubey'],
  ['chhaya-sharma', 'chhaya'],
  ['christina-james', 'christina'],
  ['harsh-dubey', 'harsh-dubey'],
  ['himanshi-joshi', 'himanshi'],
  ['himanshu-vaish', 'himanshu'],
  ['ira-prasad', 'ira-prasad'],
  ['isha-thakur', 'isha'],
  ['mithun-yadav', 'mithun'],
  ['muskan-agrawal', 'muskan-agrawal'],
  ['mustafa-pithewan', 'mustafa-pithewan'],
  ['nishchay-patel', 'nishchay'],
  ['pragati-gupta', 'pragati-gupta'],
  ['praveen-mewada', 'praveen'],
  ['preet-hora', 'preet-hora'],
  ['priyanka-sharma', 'priyanka'],
  ['raghav-mehta', 'raghav-mehta'],
  ['rishika-jain', 'rishika-jain'],
  ['ritik-jaiswal', 'ritik'],
  ['saji-temre', 'saji'],
  ['saloni-saxena', 'saloni'],
  ['shashank-chhoker', 'shashank'],
  ['shraddha-dogne', 'shraddha'],
  ['shreya-jain', 'shreya'],
  ['sourabh-kosti', 'sourabh'],
];

function extractAvatar(html) {
  const dataSrc = html.match(/data-src="(https:\/\/orangedatatech\.com\/wp-content\/uploads\/[^"]+150x150[^"]*)"/);
  if (dataSrc) return dataSrc[1];
  const noscript = html.match(/src="(https:\/\/orangedatatech\.com\/wp-content\/uploads\/[^"]+150x150[^"]*)"/);
  if (noscript) return noscript[1];
  const anyUpload = html.match(/data-src="(https:\/\/orangedatatech\.com\/wp-content\/uploads\/[^"]+\.(?:jpg|jpeg|png|webp)[^"]*)"/i);
  return anyUpload?.[1] ?? null;
}

for (const [slug, profilePath] of profiles) {
  const url = `https://orangedatatech.com/profile/${profilePath}/`;
  const res = await fetch(url);
  const html = await res.text();
  const avatar = extractAvatar(html);
  console.log(`${slug}\t${avatar ?? 'MISSING'}`);
}
