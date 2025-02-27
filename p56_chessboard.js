board_height = 8;
board_width = 4

for(i=0; i<board_height; i++){
    stringToPrint = '';
    if(i%2==0){
        for(j=0; j<board_width; j++)
            stringToPrint += ' #'
    }
    else{
        for(j=0; j<board_width; j++){
            stringToPrint += '# '
        }
    }
    console.log(stringToPrint);   
}