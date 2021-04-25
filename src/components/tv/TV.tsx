import React from "react";
import { useSelector } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { IDefaltTV } from "../../redux/TVChanels-reducer copy";
import "./style.scss";

// interface IChennels {
//   defaltTV: Array<IDefaltTV>
// }

export const TV: React.FC = () => {
  const defaltTV = useSelector(({ channels }: any) => channels.defaltTV);
  console.log(defaltTV);

  return (
    <div className="TV">
      {defaltTV &&
        defaltTV.map(({ id, title, url, programs }: any) => {
          return (
            <>
              <div className="tv__print-channels" key={id}>
                <div className="tv__leftCol">
                  <div className="tv__logo-wrapper">
                    <img src={url} alt="loading..." className="tv__logo" />
                  </div>
                </div>

                <div className="tv__programs-wrapper">
                  <div className="tv__title">{title}</div>
                  {programs &&
                    programs.map(({ id, time, descriptions }: any) => {
                      return (
                        <div className="tv__time-programs" key={id}>
                          {time} {descriptions}
                        </div>
                      );
                    })}
                </div>
              </div>{" "}
              <br />
            </>
          );
        })}
    </div>
  );
};

//export default compose(withAuthRedirect)(TV);