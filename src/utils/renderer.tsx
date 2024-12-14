import { Media } from "@/components/Media";
import { Quote } from "@/components/cms/Quote";
import { RichText } from "@/components/cms/RichText";

export const renderBlock = (block: any, key: string | number) => {
  const { __component, ...props } = block;
  switch (__component) {
    case "shared.media":
      return <Media key={key} {...props} />;
    case "shared.quote":
      return (
        <Quote key={key} {...props} content={props.body} author={props.title} />
      );
    case "shared.rich-text":
      return <RichText key={props.id} content={props.body} />;
    default:
      return null;
  }
};
