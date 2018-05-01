  // Select color input
  const colorPicker = $('#colorPicker');

  //Select form
  const sizePicker = $('#sizePicker');

  // Select size input
  const inputHeight = $('#inputHeight');
  const inputWidth = $('#inputWidth');

  //Select pixelCanvas
  const pixelCanvas = $('#pixelCanvas');

  // When size is submitted by the user, call makeGrid()
  sizePicker.submit(function(event) {
    // Draw drid based on input values
    makeGrid(inputWidth.val(), inputHeight.val());
    // prevent page refresh on submit
    event.preventDefault();
  });

  // When a canvas cell is clicked fill the corresponding colorPicker scolor in it
  pixelCanvas.on('click','td',function (){
    $(this).css('background-color',colorPicker.val());
  });

  function makeGrid(w,h) {
    pixelCanvas.children().remove();
    const tr_html = '<tr></tr>';
    const td_html = '<td><span style="width:10px;height:10px;"></span></td>';
    let tr = $(tr_html);
    let td = $(td_html);
    for (let rows = 0; rows < w; rows++){
      tr.remove();
      for (let cols = 0; cols < h; cols++) {
        tr.append(td_html);
      }
      pixelCanvas.append(tr);
      tr = $(tr_html);
    }
  }
