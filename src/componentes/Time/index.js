import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador';
import './time.css';

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
  return (
    colaboradores.length > 0 && (
      <section
        className='time'
        style={{
          backgroundImage: 'url(/imagens/fundo.png)',
          backgroundColor: hexToRgba(time.cor, '0.6'),
        }}
      >
        <input
          value={time.cor}
          type='color'
          className='input-color'
          onChange={(event) => mudarCor(event.target.value, time.id)}
        ></input>
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        <div className='colaboradores'>
          {colaboradores.map((colaborador, indice) => {
            return (
              <Colaborador
                aoFavoritar={aoFavoritar}
                key={indice}
                colaborador={colaborador}
                corDeFundo={time.cor}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
