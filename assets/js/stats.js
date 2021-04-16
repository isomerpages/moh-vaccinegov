function formatNumber(n){
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(2) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};
function getUri(){
  let env = 'staging'
  if(window.location.hostname === 'www.vaccine.gov.sg' || window.location.hostname === 'vaccine.gov.sg'){
    env = 'production'
  }
  return `https://api.vaccine.gov.sg/${env}/stats`
}
axios.get(getUri())
.then(function (response) {
  const numTotalPrereg = document.getElementById('num-total-preregistrations')
  const numTotalBookingLinks = document.getElementById('num-total-booking-links-sent')
  const currDate = document.getElementById('curr-date')
  numTotalPrereg.innerHTML = formatNumber(response.data.num_total_preregistrations)
  numTotalBookingLinks.innerHTML = formatNumber(response.data.num_total_booking_links_sent)
  currDate.innerHTML = new Date(response.data.updated_at).toDateString().substring(4) 
  // toDateString() returns DAYOFWEEK MM DD YYYY
  // We only want MM DD YYYY without the day of week
})
.catch(function (error) {
  console.log(error);
})