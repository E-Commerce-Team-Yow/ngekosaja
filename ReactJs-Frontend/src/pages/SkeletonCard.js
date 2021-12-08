import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonCard = () => {
  return (
    <section>
      <header className="header shop">
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="top-left">
                                <ul className="list-main">
                                    <li><Skeleton height={20} width={100}/></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-12">
                            <div className="right-content">
                                <ul className="list-main">
                                    <li><Skeleton height={20} width={100}/></li>
                                    <li><Skeleton height={20} width={100}/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </section>
  );
};

export default SkeletonCard;