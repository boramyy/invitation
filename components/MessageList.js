import styled from "styled-components";
import "rc-pagination/assets/index.css";
import Pagination from 'rc-pagination';

const MessageItem = ({ name, time, msg }) => (
  <BoxMessage>
    <Name>{name}</Name>
    <When>{time}분전</When>
    <RemoveButton
      onClick={() => {
        console.log("remove");
      }}
    />
    <Text>{msg}</Text>
  </BoxMessage>
);

const Name = styled.span`
  font-weight: 400;
`;

const When = styled.span`
  margin-left: 12px;
  color: #999;
`;

const RemoveButton = styled.button`
  float: right;
  width: 15px;
  height: 22px;
  padding: 0;
  background-image: url("/static/images/icon_remove.png");
  background-position: center center;
  background-size: 8px 8px;
  background-repeat: no-repeat;
  background-color: transparent;
`;

const Text = styled.p`
  display: block;
  margin-top: 4px;
  line-height: 1.6;
`;

const BoxMessage = styled.div`
  margin-bottom: 22px;
`;

const StyledPaging = styled(Pagination)`
  float: left;
  & li {
    float: left;
    width: 22px;
    min-width: 22px;
    height: 22px;
    margin-right: 4px;
    margin-left: 4px;
    padding: 4px 0;
    border: 0;
    border-radius: 50%;
    line-height: 1;
    &.on {
      background: #ddf0f4;
    }
    & a {
      font-size: 16px;
    }
  }
`;

const itemRender = (current, type, element) => {
  if (type === "page") {
    return <a href={`#${current}`}>{current}</a>;
  }
  return element;
};

const WrapMessage = props => (
  <div>
    {props.messageList.map((item, index) => (
      <MessageItem key={index} name={item.name} time={item.time} msg={item.msg} />
    ))}
  </div>
);

class MessageList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 3,
    }
  }

  handles = {
    addMessage: () => {

    },
    onChange: (page) => {
      console.log(page);
      this.setState({
        currentPage: page,
      });
    }
  }

  render() {
    return <div>
        <h3 className="hide">축하메세지 리스트</h3>
        <WrapMessage messageList={this.props.messageList} />
        <StyledPaging onChange={this.handles.onChange} current={this.state.currentPage} total={450} pageSize={5} itemRender={itemRender} />
      </div>;
  }
}

export default MessageList;