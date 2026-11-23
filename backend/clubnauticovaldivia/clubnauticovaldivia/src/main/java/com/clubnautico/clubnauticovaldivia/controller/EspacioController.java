package com.clubnautico.clubnauticovaldivia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clubnautico.clubnauticovaldivia.service.EspacioService;

@RestController
@RequestMapping ("api/v1/espacios")
public class EspacioController {

    @Autowired 
    private EspacioService espacioService;
}
