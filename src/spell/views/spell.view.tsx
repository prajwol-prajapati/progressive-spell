import { FloatButton } from "antd";
import { ISpell } from "../spell.type";
import { Card } from "../components/spell-card";
import { LoadingOutlined } from "@ant-design/icons";
import { useListOfSpells } from "../hooks/use-spell";
import { TitleContainer } from '../../app/components/title-container'

const HomePage = () => {
  const { data, isLoading } = useListOfSpells();

  return (
    <TitleContainer title="Spells">
      {isLoading ? (
        <div className="loader">
          <LoadingOutlined />
        </div>
      ) : (
        <div className="grid">
          {data?.results?.map((spell: ISpell) => (
            <Card name={spell.name} key={spell.index} index={spell.index} />
          ))}
        </div>
      )}
      <FloatButton.BackTop />
    </TitleContainer>
  );
};

export { HomePage };
