
interface Persona {
    nombre:string;
    edad:number;
    direccion: Direccion;
}

interface Direccion {
    pais:string;
    casaNo: number;

}

const ObjetosLiterales = () => {

    const persona: Persona = {

        nombre:"Fernando",
        edad:35,
        direccion:{
            pais:"Canada",
            casaNo: 615
        }
    }

    return (
        <div>

            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null,2)}
                </pre>
            </code>
            
            
        </div>
    )
}

export default ObjetosLiterales
