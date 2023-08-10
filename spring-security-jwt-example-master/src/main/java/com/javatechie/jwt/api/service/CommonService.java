package com.javatechie.jwt.api.service;

import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

@Service
public class CommonService {
    public List getCityList(String query) {
        List cityList = new ArrayList<String>();
        cityList.add("London");
        cityList.add("Los Angeles");
        cityList.add("UK");
        cityList.add("Pune");
        cityList.add("Punchgani");
        cityList.add("Mumbai");
        cityList.add("Bengaluru");
        cityList.add("Dehli");

        List resultList = (List) cityList.stream().filter(s -> s.toString().contains(query)).collect(Collectors.toList());

        try {
            FileWriter fw = new FileWriter(new File("history.txt"), true);

            if(query.length() > 0) fw.write("\n" + query);
            fw.close();

        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return resultList;
    }

    public List getHistory() throws FileNotFoundException {

        File myHistory = new File("history.txt");
        List historyList = new ArrayList();
        Scanner myReader = new Scanner(myHistory);
        while (myReader.hasNextLine()) {
            String data = myReader.nextLine();
            historyList.add(data);
        }

        return historyList;
    }
}
