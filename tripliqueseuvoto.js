function startTimer(duration) {
  let timer = duration

  function daysRemaining() {
    now = new Date(Date.now()).getDate();
    // dia da eleição subtraindo a data de hoje e uma unidade porque o dia já começou =)
    return (30 - now - 1);
  }

  function hoursRemaining() {
    now = new Date(Date.now()).getHours();
    // 24 horas do dia subtraindo a data de hoje e uma unidade porque a hora atual já tá em andamento =)
    return (24 - now - 1);
  }

  function minutesRemaining() {
    now = new Date(Date.now()).getMinutes();
    // 60 minutos subtraindo os minutos de agora, não precisa tirar uma únidade porque não vamos medir os segundos =)
    return (60 - now);
  }

  let days = daysRemaining()
  let hours = hoursRemaining()
  let minutes = minutesRemaining()

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  if (--timer < 0) {
    timer = duration
  }

  return `FALTAM ${days} DIAS, ${hours} HORAS E ${minutes} MINUTOS`;
}

setTimeout(() => {
  let duration = 60 * 120;

  document.querySelector(
    "#block-40267 > div > div > div > div > div > div > div > div:nth-child(3) > span > span:nth-child(1) > strong > span > span > span"
  ).textContent =
    startTimer(duration)
}, "1000")
