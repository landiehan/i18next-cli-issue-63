import { Trans, useTranslation } from "react-i18next";

function App() {
  const item = {
    userName: "X",
  };
  const { i18n } = useTranslation();

  return (
    <>
      <div>Language: {i18n.language}</div>
      <div>
        <div>
          <Trans i18nKey={"ticket_received_msg"} count={1}>
            <span className="font-extrabold text-fg">
              {{ username: item.userName }}
            </span>{" "}
            got{" "}
            <span className="font-extrabold text-brand">{{ count: 1 }}</span>{" "}
            ticket
          </Trans>
        </div>
      </div>
    </>
  );
}

export default App;
