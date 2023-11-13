function getFormattedDate(baseDate: Date, daysToSubtract: number | undefined) {
  if (daysToSubtract) {
    const date = new Date(baseDate);
    date.setDate(date.getDate() - daysToSubtract);

    return date.toISOString().slice(0, 10);
  }
}

export default getFormattedDate;
