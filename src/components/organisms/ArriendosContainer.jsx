import ArriendoEspacio from "../molecules/ArriendoEspacio";
import ArriendoServicio from "../molecules/ArriendoServicio";

function ArriendosContainer({ title, lista_arriendos = [] }) {
    return (
        <>
            <h3>{title}</h3>
            <div className="arriendos_container">
                {lista_arriendos.map((item, index) => {
                    switch (item.tipo) {
                        case 'espacio':
                            return (
                                <ArriendoEspacio 
                                    key={index}
                                    img={item.img} 
                                    title={item.title}
                                    tamanos={item.tamanos}
                                    tiempos={item.tiempos}
                                />
                            );
                        case 'servicio':
                            return (
                                <ArriendoServicio 
                                    key={index}
                                    img={item.img} 
                                    title={item.title} 
                                    cost_text={item.cost_text}
                                />
                            );
                        default:
                            return null;
                    }
                })}
            </div>
        </>
    );
}

export default ArriendosContainer;