package com.server.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/*
 * DB Table appointment map out
 * Table Field follows JPA default naming strategy for spring-boot will :
        Replace dots with underscores
        Change camel case to snake case
        Lower-case table name
    Table should see first_name, last_name.....
    When initialize, no need to create table, just the DB is needed
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "appointments")
public class Appointment {
    @Id
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "product_generator"
    )
    @SequenceGenerator(
        name = "product_generator",
        sequenceName = "product_sequence_name",
        allocationSize = 1
    )
    private int Id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String petName;
    private String brea;
    private int age;
    private String otherInformation;
}
