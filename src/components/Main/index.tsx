import { relativeTime } from "@r2kode/qnf-js-lib";

function Main() {
  const relTimeTest = relativeTime(
    "2022-12-01 10:00",
    "2022-12-01 22:00",
    "hour",
    {
      lang: "pl",
    }
  );
  return <div>{relTimeTest}</div>;
}

export default Main;
