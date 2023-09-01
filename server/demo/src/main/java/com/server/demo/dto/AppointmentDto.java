package com.server.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentDto{
    private String id;
    private String f_name;
    private String last_name;
    private String email;
    private String cell_phone;
    private String pet_name;
    private String brea;
    private Integer age;
    private String orther_information;
}
