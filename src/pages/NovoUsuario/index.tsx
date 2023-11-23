import React, { useRef } from 'react';
import './style.newuser.css';
import Modal from '../../components/Modal/modal';
import { useState } from "react";

export default function CardUsuario(props: any) {
  const cardWidth: number = 500;
  const degIncrement: number = 6;

  const cardRef = useRef<HTMLDivElement>(null);

  const [modalAberto, setModalAberto] = useState(false);


  const getRotateDeg = (input: number): string => {
    if (input < cardWidth * 0.33) {
      return `-${degIncrement * 3}deg`;
    } else if (input >= cardWidth * 0.33 && input < cardWidth * 0.66) {
      return `-${degIncrement}deg`;
    } else if (input >= cardWidth * 0.66 && input <= cardWidth) {
      return '0deg';
    } else if (input >= cardWidth * 0.5 && input < cardWidth * 0.66) {
      return `${degIncrement}deg`;
    } else {
      return `${degIncrement * 3}deg`;
    }
  };

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>): void => {
    const { current: card } = cardRef;

    if (card) {
      const rect: DOMRect = card.getBoundingClientRect();
      const rotateX: string = getRotateDeg(event.clientY - rect.top);
      const rotateY: string = getRotateDeg(event.clientX - rect.left);

      card.style.transform = `rotateX(${rotateX}) rotateY(${rotateY})`;
    }
  };

  const onMouseLeave = (): void => {
    const { current: card } = cardRef;

    if (card) {
      card.style.transform = 'none';
    }
  };

  return (
    <div className='Fundo'>
    <div
      ref={cardRef}
      className="card"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <h1>Usuários</h1>
      <button onClick={() => setModalAberto(true)}>+ Cadastrar</button>
    </div>
    <Modal
                    isOpen={modalAberto}
                    setModalFechado={() =>
                      setModalAberto(!setModalAberto)
                    }
                  />
    </div>
  );
}




