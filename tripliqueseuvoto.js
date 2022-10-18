function startTimer(duration, display) {
  let timer = duration, minutes, seconds;

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

  setInterval(function () {
    let days = daysRemaining()
    let hours = hoursRemaining()
    let minutes = minutesRemaining()

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    display.textContent = `FALTAM ${days} DIAS, ${hours} HORAS E ${minutes} MINUTOS PARA A ELEIÇÃO MAIS IMPORTANTE DA HISTÓRIA RECENTE`;

    if (--timer < 0) {
      timer = duration
    }
  }, 1000);
}

window.onload = function () {
  let duration = 60 * 120;

  document.querySelector(
    ".md-col-12 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1)"
  ).textContent = new Intl.NumberFormat().format(
    startTimer(duration, display)
  );
}
