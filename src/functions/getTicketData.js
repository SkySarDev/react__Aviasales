export default function getTicketData(ticketObj) {
  const addZero = (num) => (num < 10 ? `0${num}` : num);

  const startDate = Date.parse(ticketObj.date);
  const endDate = startDate + ticketObj.duration * 60 * 1000;
  const durationHours = addZero(Math.floor(ticketObj.duration / 60));
  const durationMinutes = addZero(ticketObj.duration % 60);

  const getTime = (timestamp) => {
    const hours = addZero(new Date(timestamp).getUTCHours());
    const minutes = addZero(new Date(timestamp).getMinutes());

    return `${hours}:${minutes}`;
  };

  const routeStops = (stops) => {
    if (!stops) {
      return "без пересадок";
    } else if (stops === 1) {
      return `${stops} пересадка`;
    } else if (stops >= 2 && stops <= 4) {
      return `${stops} пересадки`;
    } else {
      return `${stops} пересадок`;
    }
  };

  return {
    origin: ticketObj.origin,
    destination: ticketObj.destination,
    stops: [ticketObj.stops, routeStops(ticketObj.stops.length)],
    startTime: getTime(startDate),
    endTime: getTime(endDate),
    duration: `${durationHours}ч ${durationMinutes}м`,
  };
}
