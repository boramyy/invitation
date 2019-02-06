import InputForm from "./InputForm";
import Messages from "./MessageList";

class GuestBook extends React.Component {
  render() {
    return (
      <article className="wrap-content">
        <h2>축하메세지</h2>
        <Messages />
        <InputForm />
      </article>
    );
  }
}

export default GuestBook;