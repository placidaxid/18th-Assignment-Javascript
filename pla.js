        //addition
        function myfun()
        {
            var a=document.getElementById('number').value;
            var b=document.getElementById('numbers').value;
            document.getElementById('result').innerHTML=parseInt(a) + parseInt(b);
        }
        //multiplication
        function myfun1()
        {
            var a=document.getElementById('number').value;
            var b=document.getElementById('numbers').value;
            document.getElementById('result').innerHTML=(a*b);
        }
        //division
        function myfun2()
        {
            var a=document.getElementById('number').value;
            var b=document.getElementById('numbers').value;
            document.getElementById('result').innerHTML=(a/b);
        }

        //initials
        var str = "Java Script Object Notation";
        var matches = str.match(/\b(\w)/g); // ['J','S','O','N']
        var acronym = matches.join(''); // JSON

        