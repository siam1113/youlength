import { chromium } from "playwright";

export default async function getPlaylistLength(url) {
  // Setup
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Scrape
  await page.goto(url);
  await page.waitForLoadState("domcontentloaded");
  const timeStamps = await page.locator("span#text").all();
  const totalTimeStamps = timeStamps.length;
  let sumOfMinutesPart = 0;
  let sumOfSecondsPart = 0;
  for (let i = 0; i < totalTimeStamps; i++) {
    const [minutesPart, secondsPart] = (await timeStamps[i].innerText()).split(
      ":"
    );
    sumOfMinutesPart += Number(minutesPart);
    sumOfSecondsPart += Number(secondsPart);
  }
  const totalLengthMinutes = (sumOfMinutesPart + sumOfSecondsPart / 60).toFixed(
    0
  );
  const totalLengthHours = (totalLengthMinutes / 60).toFixed(0);

  // Teardown
  await browser.close();
  return [totalTimeStamps, totalLengthMinutes, totalLengthHours];
}
