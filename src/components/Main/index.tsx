import { relativeTime } from "@r2kode/qnf-js-lib";
import Button from "../Button";
import Login from "../../features/Login";

function Main() {
  const relTimeTest = relativeTime(
    "2022-12-01 10:00",
    "2022-12-01 22:00",
    "hour",
    {
      lang: "pl",
    }
  );

  return (
    <div>
      <h1>Main</h1>
      <section>{relTimeTest}</section>
      <section>
        <Button label={"Click"} style={"btn-type-primary btn-color-primary"} />
      </section>
      <section>
        <h1>LOgin form test</h1>
        <Login />
      </section>
    </div>
  );
}

export default Main;
