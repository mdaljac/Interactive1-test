<?php
		if (file_exists('articles.xml')) 
		{
		    $xml = simplexml_load_file('articles.xml');
		    	
		   
		    $third_article = $xml->category[1]->article[2];

		    $title = $third_article->title;
		    $summary = $third_article->summary;
		    $url = $third_article->url;
		    $linkcopy = $third_article->linkcopy;

		    //$result = array("title"=>$title, "summary"=>$summary, "url"=>$url, "linkcopy"=>$linkcopy);


			$result = array('title' => $title, 'summary' => $summary, 'url' => $url, 'linkcopy' => $linkcopy);
			echo json_encode($result);

		} else exit('Failed to open articles.xml.');
?>