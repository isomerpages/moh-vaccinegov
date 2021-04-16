axios.get('https://api.vaccine.gov.sg/staging/stats')
.then(function (response) {
  const numTotalPrereg = document.getElementById('num-total-preregistrations')
  const numTotalBookingLinks = document.getElementById('num-total-booking-links-sent')
  const currDate = document.getElementById('curr-date')
  numTotalPrereg.innerHTML = response.data.num_total_preregistrations
  numTotalBookingLinks.innerHTML = response.data.num_total_booking_links_sent
  currDate.innerHTML = new Date(response.data.updated_at).toDateString().substring(4) 
  // toDateString() returns DAYOFWEEK MM DD YYYY
  // We only want MM DD YYYY without the day of week
})
.catch(function (error) {
  console.log(error);
})