import { Divider } from "antd";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getSpellDetails } from "../spell.api";
import { LoadingOutlined } from "@ant-design/icons";
import { TitleContainer } from "../../app/components/title-container";

interface IDesc {
  name: string;
  description: string;
}

const Details = () => {
  const params = useParams();

  const { data, isLoading } = useQuery<any>([params?.id], getSpellDetails, {
    enabled: !!params?.id,
  });

  const Description = ({ name, description }: IDesc) => {
    return (
      <>
        <h4>{name}</h4>
        <p className="description">{description || "-"}</p>
        <Divider />
      </>
    );
  };

  return (
    <TitleContainer title={data?.name}>
      {isLoading ? (
        <div className="loader">
          <LoadingOutlined />
        </div>
      ) : (
        <div className="details">
          <Description name="Description" description={data?.desc} />
          <Description name="Range" description={data?.range} />
          {data?.material && (
            <Description name="Material" description={data?.material} />
          )}
          <Description name="Duration" description={data?.duration} />
        </div>
      )}
    </TitleContainer>
  );
};

export default Details;
