import React from "react";
import { Package, ChartCandlestick, CircleX } from "lucide-react";
import { Productdatalist } from "../data/ProductsData";
import { colorMap } from "../data/ProductsData";

function Products() {
  ///Filters
  const inStockProducts = Productdatalist.filter(
    (product) => product.status === "in-stock"
  );
  const lowStockProducts = Productdatalist.filter(
    (product) => product.status === "low-stock"
  );
  const outOfStockProducts = Productdatalist.filter(
    (product) => product.status === "out-of-stock"
  );

  function getStockStatus(product) {
    const stockid = document.getElementById("Stockid");
    if (product.status === "in-stock") {
      return "in-stock";
    } else if (product.status === "low-stock") {
      return "low-stock";
    } else if (product.status === "out-of-stock") {
      return <CircleX />;
    }
    return "";
  }
  // Premium Product Logic
  const isPremium = (product) => {
    const price = parseFloat(
      product.price.replace("$", "").replace(",", "").trim()
    );
    if (price > 1000) {
      return true;
    }
    {
      return false;
    }
    //    const isPremium = product.price > 1000;
    //   return isPremium ? true : false;
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-8">Our Products </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Productdatalist.map((Pitems) => (
          <div key={Pitems.Cid} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={Pitems.image}
              alt={Pitems.name}
              className="w-full h-48 object-fit border border-gray-200 rounded-lg mb-2"
            />

            <div className="flex items-center justify-between mb-3">
              <span className="text-md font-bold text-grey-500">
                {Pitems.name}
              </span>
              <div className="flex items-center">
                <ChartCandlestick className="text-yellow-400 mr-1"></ChartCandlestick>
                <span
                  id="Stockid"
                  className="text-sm"
                  style={{ color: colorMap[Pitems.status] ?? "black" }}
                >
                  {getStockStatus(Pitems)}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-3">
              <span className="text-xl font-bold text-grey-500">
                <p className="text-sm text-gray-500 mb-3">{Pitems.category}</p>
              </span>

              {/* is premium code */}
              {isPremium(Pitems) && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-300">
                  ✨ Premium
                </span>
              )}
            </div>

            <div className="flex items-center justify-between mb-3">
              <span className="text-xl font-bold text-grey-500">
                {Pitems.price}
              </span>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">★</span>
                <span className="text-sm text-gray-600">{Pitems.rating}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-3 mt-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-600">
                  <Package className="w-4 h-4 mr-1" />

                  <span className="text-sm text-gray-600">
                    Stock:{Pitems.stock}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
