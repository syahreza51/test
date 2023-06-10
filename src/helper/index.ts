export const encodeQueryData = (data: Record<string, any>): string => {
  const ret: string[] = [];

  for (const d in data) {
    let value = data[d];

    if (typeof value === "object") {
      value = data[d].join(",");
    }

    ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(value));
  }

  return ret.join("&");
};
export const convertDateFormat = (dateString: string): string => {
  const dateObj = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  return dateObj.toLocaleDateString("en-US", options);
};
