interface Item {
    name: string;
    quality: number;
    sellIn: number;
}

const isLegendary = (item: Item): boolean => {
    return item.name === 'Sulfuras, Hand of Ragnaros';
}

const isAgedBrie = (item: Item): boolean => {
    return item.name === 'Aged Brie';
}

const isBackstagePass = (item: Item): boolean => {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
}

const getUpdatedSellIn = (item: Item): number => {
    if (isLegendary(item)) {
        return item.sellIn;
    }
    return item.sellIn - 1;
}

// const isRegularItem = (item: Item): boolean => {
//     return !isLegendary(item) && !isAgedBrie(item) && !isBackstagePass(item)
// }

const getUpdatedRegularItemQuality = (item: Item): number => {
    let newQuality = item.quality - 1

    if (itemExpired(item)) {
        newQuality--;
    }
    if (newQuality <= 0) {
        newQuality = 0;
    }
    return newQuality;
}
    

const itemExpired = (item: Item): boolean => {
    if (item.sellIn <= 0){
        return true;
    }
    return false;
}


const getUpdatedBackstagePassQuality = (item: Item) => {
    let newQuality = item.quality + 1;
    if (item.sellIn < 11) {
        newQuality ++;
    }
    if (item.sellIn < 6) {
        newQuality ++;
    }
    if (newQuality >= 50) {
        newQuality = 50;
    }
    if (itemExpired(item)){
        newQuality = 0;
    }
    return newQuality;
}


const getUpdatedAgedBrieQuality = (item: Item): number => {
    let newQuality = item.quality +1;
    if (item.sellIn <= 0) {
        newQuality ++;
    }
    if (newQuality >= 50) {
       newQuality = 50;
    }
    return newQuality;

}


const getUpdatedQuality = (item: Item): number => {

    if (isLegendary(item)) {
        return item.quality;
    }

    if (isAgedBrie(item)) {
        return getUpdatedAgedBrieQuality(item);
    }

    if (isBackstagePass(item)) {
      return getUpdatedBackstagePassQuality(item);
    }

    return getUpdatedRegularItemQuality(item);
}

export const updateQuality = (items: Item[]): Item[] => {
    items.forEach((item: Item) => {
        item.quality = getUpdatedQuality(item);
        item.sellIn = getUpdatedSellIn(item);

    });

    return items;
}




// const increaseItemQualityByOneUnit = (item: Item): number  => {
//     return item.quality + 1;
// }



// const itemQualityBelowFifty = (item: Item): number => {
//     if (item.quality < 50) {
//         return increaseItemQualityByOneUnit(item)
//     }
//     else(item.quality); {
//         return item.quality + 1;
//     }
// }

// const itemSellInBelowSix = (item: Item): number => {
//     if(item.sellIn <6){
//         increaseItemQualityByOneUnit(item);
//     }
//     return item.quality + 3;
// }

// const itemSellInBelowEleven = (item: Item): number => {
//     if (item.sellIn < 11){
//         increaseItemQualityByOneUnit(item);
//     }
//     return item.quality + 2;
// }



// const itemBackStagePass = (item: Item): number => {
//     if(itemQualityBelowFifty(item)){
//         increaseItemQualityByOneUnit(item)
//     }
//     if(itemSellInBelowEleven(item)){
//         increaseItemQualityByOneUnit(item)
//     }
//     if(itemSellInBelowSix(item)){
//         increaseItemQualityByOneUnit(item)
//     }
//     return item.quality;
// }

//oldcode

// const isBackstagePass(item)) 
//     if (itemQualityBelowFifty(item))
//         return 
//             if (itemSellInBelowEleven(item))
                
//             }
//             if (item.sellIn < 6) {
//                 if (item.quality < 50) {
//                     item.quality = item.quality + 1;
//                 }
//             }
//         }
// }
// return item.quality;
// }

