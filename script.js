const lengthDiv = document.getElementById("length");
const getLengthBtn = document.getElementById("getLength");
const linkInput = document.getElementById("link");

getLengthBtn.addEventListener("click", () => {
  const linkInputValue = linkInput.value.trim();
  const URL = `https://yourlength.onrender.com/getLength?url=${linkInputValue}`;
  if (!linkInputValue) {
    lengthDiv.innerHTML = `No link provided`;
  } else {
    try {
      fetch(URL)
        .then((x) => x.json())
        .then((data) => {
          const [totalTimeStamps, totalLengthMinutes, totalLengthHours] = data;
          lengthDiv.innerHTML = `
      <b>Total Video (items) : </b> ${totalTimeStamps} <br>
      <b>Total Length (minutes) : </b> ${totalLengthMinutes} <br>
      <b>Total Length (hours) : </b> ${totalLengthHours} <br>`;
        });
    } catch (err) {
      lengthDiv.innerHTML = `Some unexpected error occurred please try again`;
      console.log("Fetch Error: ", err);
    }
  }
});
