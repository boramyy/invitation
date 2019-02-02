import styled from "styled-components";

const Message = ({ name, time, msg }) => (
  <BoxMessage>
    <Name>{name}</Name>
    <When>{time}분전</When>
    <RemoveButton onClick={() => {console.log('remove')}}>x</RemoveButton>
    <Text>{msg}</Text>
  </BoxMessage>
);

const Name = styled.span`
  font-weight: 400;
`;

const When = styled.span`
  margin-left: 10px;
  color: #999;
`;

const RemoveButton = styled.button`
  float: right;
  background: none;
`;

const Text = styled.p`
  display: block;
  margin-top: 2px;
  line-height: 1.6;
`;

const BoxMessage = styled.div`
  margin-bottom: 20px;
`;

const Paging = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  )
}

class MessageList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h3 className="hide">축하메세지 리스트</h3>
        <Message name="김보람" time="1" msg="언냐 츄카핸!!!!" />
        <Message name="박규진" time="2" msg="와 한나 진짜예쁘다!!!!" />
        <Message
          name="김나솜"
          time="10"
          msg="언니 결혼 축하해요~~~!! >0< 결혼식날 봬요! 절대 안울게요ㅠㅠㅠㅠㅠ"
        />
        <Paging />
      </div>
    );
  }
}

export default MessageList;