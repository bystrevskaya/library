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
<br><br>
<b>3. Злостный читатель</b>
<br>Злостный читатель - это человек, который не возвращает книги дольше 90 дней.
<br>1. В цикле проходимся по каждой выданной книге;
<br>2. Если дата возврата отсутствует, то для проверки определяем её как сегодняшний день;
<br>3. Если между датой выдачи и датой возврата > 90 дней, то определяем студента, взявшего эту книгу, как "злостного читателя".
