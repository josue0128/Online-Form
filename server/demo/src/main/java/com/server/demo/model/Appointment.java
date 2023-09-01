package com.server.demo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/*
 * DB Table appointment map out
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table
public class Appointment {
    private String id;
    private String first_name;
    private String last_name;
    private String email;
    private String cell_phone;
    private String pet_name;
    private String brea;
    private Integer age;
    private String orther_information;
}
