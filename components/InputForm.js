import styled from "styled-components";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handles = {
    submit: e => {
      // 페이지 리로딩 방지
      e.preventDefault();
      // // 상태값을 onCreate 를 통하여 부모에게 전달
      // this.props.onCreate(this.state);
      // // 상태 초기화
      // this.setState({
      //   name: "",
      //   phone: ""
      // });

      console.log('submit!');
    }
  }

  resizeTextarea = obj => {
    const msg = document.getElementById("message");
    msg.style.height = "auto";
    msg.style.height = 2 + msg.scrollHeight + "px";
  }

  render() {
    const Form = styled.form`
      overflow: hidden;
    `;
    const WrapInput = styled.div`
      float: left;
      &.right {
        margin-left: 15px;
      }
      &.bottom {
        margin-top: 20px;
      }
    `;
    const Label = styled.label`
      display: block;
      font-size: 15px;
      font-weight: 100;
    `;
    const Input = styled.input`
      width: 95px;
      height: 28px;
      margin-left: 15px;
      padding-top: 4px;
      padding-bottom: 4px;
      font-size: 15px;
      border-bottom: 0.5px solid #111 !important;
      box-sizing: border-box;
    `;
    const Textarea = styled.textarea`
      width: 272px;
      min-height: 28px;
      margin-left: 15px;
      padding-top: 4px;
      padding-bottom: 4px;
      font-size: 15px;
      line-height: 1.4;
      vertical-align: middle;
      border-bottom: 0.5px solid #111 !important;
      box-sizing: border-box;
      resize: none;
    `;
    const Submit = styled.button`
      width: 100%;
      height: 30px;
      margin-top: 30px;
      font-size: 15px;
      color: #000;
      background: #ddf0f4;
    `;

    return (
      <div>
        <h3>축하메세지 작성하기</h3>
        <Form action="" method="post">
          <WrapInput>
            <Label htmlFor="name">
              이름
              <Input type="text" id="name" name="name" />
            </Label>
          </WrapInput>
          <WrapInput className="right">
            <Label htmlFor="password">
              비밀번호
              <Input type="password" id="password" name="password" />
            </Label>
          </WrapInput>
          <WrapInput className="bottom">
            <Label htmlFor="message">
              내용
              <Textarea
                id="message"
                name="message"
                rows={1}
                onKeyUp={() => {
                  this.resizeTextarea(this);
                }}
              />
            </Label>
          </WrapInput>
          <Submit type="submit" onClick={this.handles.submit}>작성하기</Submit>
        </Form>
      </div>
    );
  }
}

export default InputForm;