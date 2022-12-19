import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Portfolio = () => {
    return (
      <section className="grid gap-4 gird-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card bg-base-100 shadow-xl image-full ">
          <Image
            src="/../public/portfolio/portfolio3.jpg"
            width="400"
            height="500"
            alt="portfolio"
          />
          <div className="card-body">
            <h2 className="card-title">E-commerce</h2>
            <p className="text-sm">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions justify-between">
              <Link href="#">
                <button className="underline hover:delay-1000">
                  Live link
                </button>
              </Link>
              <Link href="#">
                <button className="underline hover:delay-1000">
                  Show details
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl image-full">
          <Image
            src="/../public/portfolio/portfolio3.jpg"
            width="400"
            height="500"
            alt="portfolio"
          />
          <div className="card-body">
            <h2 className="card-title">E-commerce</h2>
            <p className="text-sm">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions justify-between">
              <Link href="#">
                <button className="underline hover:delay-1000">
                  Live link
                </button>
              </Link>
              <Link href="#">
                <button className="underline hover:delay-1000">
                  Show details
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl image-full">
          <Image
            src="/../public/portfolio/portfolio3.jpg"
            width="400"
            height="500"
            alt="portfolio"
          />
          <div className="card-body">
            <h2 className="card-title">E-commerce</h2>
            <p className="text-sm">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions justify-between">
              <Link href="#">
                <button className="underline hover:delay-1000">
                  Live link
                </button>
              </Link>
              <Link href="#">
                <button className="underline hover:delay-1000">
                  Show details
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl image-full">
          <Image
            src="/../public/portfolio/portfolio3.jpg"
            width="400"
            height="500"
            alt="portfolio"
          />
          <div className="card-body">
            <h2 className="card-title">E-commerce</h2>
            <p className="text-sm">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions justify-between">
              <Link href="#">
                <button className="underline hover:delay-1000">
                  Live link
                </button>
              </Link>
              <Link href="#">
                <button className="underline hover:delay-1000">
                  Show details
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl image-full">
          <Image
            src="/../public/portfolio/portfolio3.jpg"
            width="400"
            height="500"
            alt="portfolio"
          />
          <div className="card-body">
            <h2 className="card-title">E-commerce</h2>
            <p className="text-sm">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions justify-between">
              <Link href="#">
                <button className="underline hover:delay-1000">
                  Live link
                </button>
              </Link>
              <Link href="#">
                <button className="underline hover:delay-1000">
                  Show details
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl image-full">
          <Image
            src="/../public/portfolio/portfolio3.jpg"
            width="400"
            height="500"
            alt="portfolio"
          />
          <div className="card-body">
            <h2 className="card-title">E-commerce</h2>
            <p className="text-sm">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions justify-between">
              <Link href="#">
                <button className="underline hover:delay-1000">
                  Live link
                </button>
              </Link>
              <Link href="#">
                <button className="underline hover:delay-1000">
                  Show details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Portfolio;