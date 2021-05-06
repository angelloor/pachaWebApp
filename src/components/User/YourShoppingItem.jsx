import React from 'react';
import iconOk from '../../assets/static/ok.svg';
import iconRetun from '../../assets/static/return.svg';
import Http from '../../libs/http';

const YourShoppingItem = props => {
    const { handleDelivery, handleReturnDelivery, index } = props
    const { itemId, deliveryStatus, deliveryDate, shoppingDate, _id } = props.item
    const url = itemId.urlImage
    const urlResource = `${Http.instance.server}${url}`

    return (
        <>
            <div className="containerElement">
                <div className="containerImg">
                    <img src={urlResource} alt="imagen item de la tienda" />
                </div>
                <div className="containerDetails">
                    <p className="title">{itemId.title}</p>
                    <p><strong>Fecha de compra: </strong>{shoppingDate}</p>
                    {(deliveryStatus) ? <p><strong>Fecha de entrega: </strong>{deliveryDate}</p>
                        : <></>
                    }
                </div>
                <div className="containerOptions">
                    {(deliveryStatus) ?
                        <a onClick={() => handleReturnDelivery(_id, index)} className="btnOptions">
                            <img src={iconRetun} alt="botones" />
                        </a>
                        :
                        <a onClick={() => handleDelivery(_id, index)} className="btnOptions">
                            <img src={iconOk} alt="botones" />
                        </a>
                    }
                </div>
            </div>
        </>
    );
};

export default YourShoppingItem;