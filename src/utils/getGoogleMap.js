const mapsSelector = () => {
  if (
    /* if we're on iOS, open in Apple Maps */
    navigator.userAgent.indexOf("iPhone") !== -1 ||
    navigator.userAgent.indexOf("iPod") !== -1 ||
    navigator.userAgent.indexOf("iPad") !== -1
  )
    window.open(
      `https://www.google.ch/maps/dir//Les+P'tits+Loups,+Rte+de+la+Clochatte+5,+1052+Le+Mont-sur-Lausanne/@46.5417304,6.6343542,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x478c2e10c6fc2bcf:0xc3594a2908727ecd!2m2!1d6.6365482!2d46.5417304!3e0`
    )
  /* else use Google */ else
    window.open(
      `https://www.google.ch/maps/dir//Les+P'tits+Loups,+Rte+de+la+Clochatte+5,+1052+Le+Mont-sur-Lausanne/@46.5417304,6.6343542,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x478c2e10c6fc2bcf:0xc3594a2908727ecd!2m2!1d6.6365482!2d46.5417304!3e0`
    )
}

export default mapsSelector
