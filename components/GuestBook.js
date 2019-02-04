import InputForm from "./InputForm";
import Messages from "./MessageList";

class GuestBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [
        { name: "김보람", time: "1", msg: "언냐 츄카핸!!!!" },
        { name: "박규진", time: "2", msg: "와 한나 진짜예쁘다!!!!" },
        {
          name: "김나솜",
          time: "10",
          msg:
            "언니 결혼 축하해요~~~!! >0< 결혼식날 봬요! 절대 안울게요ㅠㅠㅠㅠㅠ"
        }
      ]
    };
  }

  handles = {
    addMessage: () => {},
    getMessageList: () => {

      // fetch('/message/')
      //   .then(res => {
      //     console.log(res);
      //     return res.json()
      //   })
      //   .then(list => {
      //     console.log(list);
      //     // this.setState({ users });
      //   });

      fetch("/message", {
        method: "POST",
        // body: JSON.stringify({
        //   task: self.refs.task.value
        // }),
        headers: { "Content-Type": "application/json" }
      })
        .then(function(response) {
          console.log(response);
          return response.json();
        })
        .then(function(body) {
          console.log(body);
          // alert(self.refs.task.value);
        });

    },
    onChange: page => {
      console.log(page);
      this.setState({
        currentPage: page
      });
    }
  };

  componentDidMount() {
    this.handles.getMessageList();
  }

  render() {
    return (
      <article className="wrap-content">
        <h2>축하메세지</h2>
        <Messages messageList={this.state.messageList} />
        <InputForm addMessage={this.handles.addMessage} />
      </article>
    );
  }
}

export default GuestBook;