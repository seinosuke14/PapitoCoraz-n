import FeatureCard from "./feature-cards/feature-cards";
import "./feature-style.scss";




export default function Feature(){
     return (
    <section className="features">
      <h2>¿que puedes hacer aqui?</h2>
      <div className="features-grid">

         <FeatureCard
        icon = {<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M792-120.67 532.67-380q-30 25.33-69.64 39.67Q423.39-326 378.67-326q-108.44 0-183.56-75.17Q120-476.33 120-583.33t75.17-182.17q75.16-75.17 182.5-75.17 107.33 0 182.16 75.17 74.84 75.17 74.84 182.27 0 43.23-14 82.9-14 39.66-40.67 73l260 258.66-48 48Zm-414-272q79.17 0 134.58-55.83Q568-504.33 568-583.33q0-79-55.42-134.84Q457.17-774 378-774q-79.72 0-135.53 55.83-55.8 55.84-55.8 134.84t55.8 134.83q55.81 55.83 135.53 55.83Z"/></svg>}
        title = "Cuanto me toca pagar"
        descriptions = "Verifica cuanto debes pagar de pensión."
        href="/consultar"
        />
         <FeatureCard
        icon = {<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M180-630h600v-130H180v130Zm0 0v-130 130Zm0 550q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v307q-14.17-7.29-29.08-12.14Q796-470 780-473v-97H180v430h319q6 17 14 31.5T532-80H180Zm551 40q-78.43 0-133.72-55.28Q542-150.57 542-229t55.28-133.72Q652.57-418 731-418t133.72 55.28Q920-307.43 920-229T864.72-95.28Q809.43-40 731-40Zm58.24-88L817-156l-75-75v-112h-39v126l86.24 89Z"/></svg>}
        title = "consulta las fechas de pago"
        descriptions = "Aqui de indicamos exactamente que dia debes pagar"
        href="/consultar"
        />
         <FeatureCard
        icon = {<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M290-80q-54 0-92-38t-38-92v-540q0-53.86 38-91.93Q236-880 290-880h510v600q-26 0-43 21t-17 49q0 28 17 49t43 21v60H290Zm-.46-60H699q-9-15-14-33t-5-37q0-20 5-37.5t15-32.5H289.61q-28.61 0-49.11 20.42Q220-239.17 220-210q0 29 20.5 49.5t49.04 20.5ZM220-320q15-10 32.34-15 17.33-5 37.66-5h450v-480H290q-29 0-49.5 20.42Q220-779.17 220-750v430Zm129-120h49l25-71h113l25 71h49L504-720h-50L349-440Zm88-112 41-116h3l41 116h-85ZM220-320v-500 500Z"/></svg>}
        title = "Consultas legales"
        descriptions = "Aqui podras realizar tus consultas directamente y ademas te entregamos material importante que debes manejar"
        href="/consultar"
        />
      </div>

    </section>
  );
}