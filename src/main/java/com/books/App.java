package com.books;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Library Application!
 *
 */
@SpringBootApplication
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "App is about to run ... " );
        SpringApplication.run(App.class, args);
        System.out.println( "App is running :) " );
    }
}
