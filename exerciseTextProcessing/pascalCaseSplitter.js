function pascalCaseSplitter(input) {

    let pascalCaseSplitterArray = input.split(/(?=[A-Z])/);
    console.log(pascalCaseSplitterArray.join(', '));

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');