package com.javatechie.jwt.api.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommonService {
    public List getCityList(String query) {
        List cityList = new ArrayList<String>();
        cityList.add("London");
        cityList.add("UK");
        cityList.add("Pune");
        cityList.add("Mumbai");
        cityList.add("Bengaluru");
        cityList.add("Dehli");

        List resultList = (List) cityList.stream().filter(s -> s.toString().contains(query)).collect(Collectors.toList());

        return resultList;
    }
}
