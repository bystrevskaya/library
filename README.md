<b>1. Модель данных</b>
<br>Модель данных, лежащая в основе заданного приложения, описана с помощью ER диаграммы со следующими таблицами: Автор, Книга, Издательство, Выданная книга, Студент
![datamodel](https://user-images.githubusercontent.com/58703112/139531377-e47919ca-cd31-4a3e-92d3-9aa361dd9deb.jpg)
<br><br>
<b>2. Популярный автор</b>
<br>select a.authorname, count(ib.issuedate) from author a 
<br>join booksauthor ba on a.authorid = ba.authorid
<br>join issuedbook ib on ba.bookid = ib.bookid
<br>group by a.authorname
<br>order by count(ib.issuedate) desc limit 1
