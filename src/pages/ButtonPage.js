import { CiBellOn, CiApple, CiBowlNoodles } from "react-icons/ci";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div >
      <div>
        <Button primary rounded onClick={handleClick}>
          <CiBellOn />
          click me</Button>
      </div>
      <div>
        <Button secondary outline onMouseEnter={handleClick}>
          <CiApple />
          buy now
        </Button>
      </div>
      <div>
        <Button success>
          <CiBowlNoodles />
          see deal
        </Button>
      </div>
      <div>
        <Button warning outline>block ad</Button>
      </div>
      <div>
        <Button danger rounded>accept</Button>
      </div>
    </div>
  );
}

export default ButtonPage;