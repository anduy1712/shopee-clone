import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Column from './Column';
const SkeletonCard = ({ size, length }) => {
  const [c, m, l] = size;
  return (
    <Column c={c} m={m} l={l}>
      <div className="product">
        <div className="product__img">
          {<Skeleton style={{ borderRadius: 0 }} height={180} />}
        </div>
        <div className="product__desc">
          <h3 className="product__desc-title">{<Skeleton />}</h3>
          <div className="product__box">
            <p className="product__box-price">{<Skeleton />}</p>
            <span className="product__box-sold">
              <Skeleton />
            </span>
          </div>
        </div>
      </div>
    </Column>
  );
};

export default SkeletonCard;
